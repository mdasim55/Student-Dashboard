type Props = {
  title: string;
  value: string;
};

function Card({ title, value }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-gray-500 text-lg">{title}</h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default Card;