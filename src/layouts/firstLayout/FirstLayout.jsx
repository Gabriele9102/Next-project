import Navbar from '@/components/navbar';
import styles from './firstLayout.module.scss';


const FirstLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };
  
  export default FirstLayout;