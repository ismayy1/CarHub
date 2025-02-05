import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { cars } from '../data/cars';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Statistics: React.FC = () => {
  // Simulated purchase data
  const purchaseData = cars.map((car) => ({
    name: `${car.make} ${car.model}`,
    purchases: Math.floor(Math.random() * 100),
  }));

  const conditionData = [
    {
      name: 'New',
      value: cars.filter((car) => car.condition === 'New').length,
    },
    {
      name: 'Used',
      value: cars.filter((car) => car.condition === 'Used').length,
    },
  ];

  return (
    <div className="flex-1 bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sales Statistics
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Purchase Rate Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Purchase Rate by Model</h2>
            <div className="overflow-x-auto">
              <BarChart width={500} height={300} data={purchaseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="purchases" fill="#3B82F6" />
              </BarChart>
            </div>
          </div>

          {/* Condition Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              New vs Used Distribution
            </h2>
            <PieChart width={400} height={300}>
              <Pie
                data={conditionData}
                cx={200}
                cy={150}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  name,
                }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {conditionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};