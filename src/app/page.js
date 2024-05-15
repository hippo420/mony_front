
export default function Home() {
  const port = process.env.NEXT_PUBLIC_PORT;
  console.log('ENV: '+ port);

  return (
    <div>
      <h2>HomeTest</h2>
    </div>
  );

}
