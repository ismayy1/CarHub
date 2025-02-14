import {
    Timestamp,
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
    getDocs,
    query,
    where,
    db,
    auth,
    ref,
    storage,
    deleteObject,
    arrayRemove,
  } from "./firebase";
  
  export function nrWithSpaces(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  
  export function nrWithoutSpaces(number: number) {
    return Number(number.toString().replace(/\s+/g, ""));
  }
  
  export const timeIntervals = [
    { value: 60000, label: "minute" },
    { value: 3600000, label: "hour" },
    { value: 86400000, label: "day" },
    { value: 604800000, label: "week" },
    { value: 2629800000, label: "month" },
    { value: 31557600000, label: "year" },
  ];
  
  export function getTimeAgo(timestamp: Timestamp) {
    const messageTime = timestamp.toDate();
    const timeDiff = new Date().getTime() - messageTime.getTime();
    const yearsDiff = Math.floor(timeDiff / 31557600000);
    for (const interval of timeIntervals) {
      const diff = Math.floor(timeDiff / interval.value);
      if (diff < 1) {
        return "just now";
      } else if (diff < 60) {
        return `${diff} ${interval.label}${diff === 1 ? "" : "s"} ago`;
      }
    }
    return `${Math.floor(
      timeDiff / timeIntervals[timeIntervals.length - 1].value
    )} year${yearsDiff === 1 ? "" : "s"} ago`;
  }
  
  export async function createChat(
    recipientId: string,
    url: string,
    carImageURL: string
  ): Promise<string> {
    if (!auth.currentUser) {
      showToolTip("You must be logged in to send a message", "red");
      return "";
    }
  
    let chatId = "";
    const chatsColRef = collection(db, "chats");
    const queryChatBetweetUsers = query(
      chatsColRef,
      where("users", "in", [[auth.currentUser.uid, recipientId]])
    );
    const querySnapshot = await getDocs(queryChatBetweetUsers);
    if (querySnapshot.docs.length > 0) {
      chatId = querySnapshot.docs[0].id;
    } else {
      try {
        const chatRef = collection(db, "chats");
        const newChatDoc = await addDoc(chatRef, {
          createdAt: Timestamp.now(),
          users: [auth.currentUser.uid, recipientId],
        });
  
        chatId = newChatDoc.id;
  
        const messagesRef = collection(db, `chats/${chatId}/messages`);
        await addDoc(messagesRef, {
          text: `Hello there! Is this car still available? ${url} `,
          senderId: auth.currentUser.uid,
          createdAt: Timestamp.now(),
          chatId: chatId,
          participants: [auth.currentUser.uid],
          dataType: "text",
          isFirstMessage: true,
          firstMessageImageURL: carImageURL,
        });
      } catch (error) {
        showToolTip("Error creating chat", "red");
        chatId = "";
      }
    }
    return chatId;
  }
  
  export const deleteCar = async (id: string) => {
  
    if (!auth.currentUser) {
      showToolTip("You must be logged in to delete a car", "red");
      return;
    }
    const carDocRef = doc(db, "cars", id);
    const carDoc = await getDoc(carDocRef);
    const carData = carDoc.data();
    const images = carData?.images;
    
    images?.forEach((image: string) => {
      const imageRef = ref(storage, image);
      deleteObject(imageRef);
    });
    
    await deleteDoc(carDocRef);
    const userDocRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userDocRef, {
      adsArray: arrayRemove(id),
    });
    
  };
  
  
  export function showToolTip(message: string , color : string) {
    const tooltip = document.createElement("div");
    tooltip.textContent = message;
    tooltip.style.position = "fixed";
    tooltip.style.bottom = "10px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.backgroundColor = "#333";
    tooltip.style.color = color;
    tooltip.style.padding = "10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "9999";
    document.body.appendChild(tooltip);
    setTimeout(function() {
        document.body.removeChild(tooltip);
    }, 3000);
  }