// Components
import Header from './components/Header';
import LeftSide from './components/Leftside';
import RightSide from './components/Rightside';

// StyleSheet
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;