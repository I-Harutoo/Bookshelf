import BookCard from "./components/BookCard";
const books=[
  {
    id:1,
    title:"JS基礎",
    author:"山田明美",
    rating:"★★★★☆",
    comment:"JSの基礎を固めることができる"
  },
  {
    id:2,
    title:"React初心者向け",
    author:"佐藤卓己",
    rating:"★★★☆☆",
    comment:"Reactを初めて学ぶ人は読むべき"
  },
  {
    id:3,
    title:"CSS完全攻略",
    author:"すずきたなか",
    rating:"★★★☆☆",
    comment:"説明が難しい",
  },
];
function App() {
  return (
    <main className="max-w-2xl mx-auto p-4">
    <h1 className="text-4xl font-bold">私の本棚</h1>
    {books.map((book)=>(
      <BookCard
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        comment={book.comment}
      />  
    ))}
    </main>
  );
}
export default App;