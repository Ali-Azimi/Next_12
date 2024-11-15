import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <img src={item.image} />
      <h3>{item.title}</h3>
      <p>category: {item.category}</p>
      <span>{item.price}</span>
      <div className="btn">
        <Link href={{ pathname: "/products/[id]", query: { id: item.id } }}>
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
