import Card from "./Card";
import Flex from "./Flex";


  const cards = [
    {
      title: 'The Coldest Sunset',
      img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: 'The Warmest Sunset',
      img: "https://images.unsplash.com/photo-1466618572466-002f11d518db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: 'The Coolest Ocean',
      img: "https://images.unsplash.com/photo-1468861389126-e0ca735dba0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ]


export default function Main() {

  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} paragraph={undefined} />)}
      </div>

      <Flex className="bg-stone-100 justify-center p-3 rounded gap-4 cursor-pointer hover:scale-105 transition-all shadow-lg m-2">
        <span>Child tag one</span>
        <span>Child tag two</span>
        <span>Child tag three</span>
      </Flex>
    </main>
  );
}
