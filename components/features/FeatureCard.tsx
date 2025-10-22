import React from 'react';

type Props = Readonly<{
  title: string;
  description: string;
  icon?: React.ReactNode;
}>;

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="bg-gray-20 rounded-lg p-8 text-center shadow-sm border">
      <div className="flex items-center justify-center mb-4 text-emerald-60 text-4xl">
        {icon || <span>🌈</span>}
      </div>
      <h3 className="text-xl font-bold text-emerald-60 mb-2">{title}</h3>
      <p className="text-sm text-gray-70">{description}</p>
    </div>
  );
}
