import "./index.css";

function App() {
  return (
    <>
        <header className="header">
            <h1>My Home Page</h1>
            <p>HTMLからやり直してる</p>
        </header>
        
        <main className="container cards">
         <section className="card">
            <h2>反省していること</h2>
            <p>Reactの学習を始めてから、JSXとHTMLが混同してバグが起こりまくった</p>
         </section>

         <section className="card">
            <h2>今後改善したいこと</h2>
            <p>JSXとHTMLの違いをしっかり理解し、混同しないようにする</p>
         </section>

         <section className="card">
            <h3>今後の目標</h3>
            <ul>
                <li>JSXを使った動的コンポーネントの作成</li>
                <li>AIに頼らないコード制作</li>
            </ul>
         </section>
        </main>

        <footer className="footer">
            <p>進捗状況をここに書く予定</p>
        </footer>
        </>
  );
}

export default App;

/*a*/