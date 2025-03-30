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
  
  function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
         {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}
      </div>
    </main>
  );
  }