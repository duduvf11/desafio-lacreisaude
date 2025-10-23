import React from 'react';

type Props = Readonly<{
  title: string;
  text: string;
  icon?: React.ReactNode;
}>;

export default function InfoCard({ title, text, icon }: Props) {
  return (
    <div className="bg-white border rounded-md p-4 shadow-sm">
      {icon ? <div className="mb-2 text-emerald-60 text-2xl">{icon}</div> : null}
      <h4 className="font-bold text-emerald-60">{title}</h4>
      <p className="text-sm text-gray-700 mt-2">{text}</p>
    </div>
  );
}
