// Components
import Header from './components/Header';
import PageContent from './components/PageContent';

// StyleSheet
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <PageContent />
      </div>
    </div>
  );
}

export default App;