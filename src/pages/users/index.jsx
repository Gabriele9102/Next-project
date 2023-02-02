import styles from "../../styles/users.module.scss"
import { Link } from 'next/link';


export default function Users ({users}) {

    return(
        <div>
        
            <div className={styles.user}>
                { users && users.map((user)=> (
                    <div className={styles.card} key={user.id}>
                    <h3 className={styles.full__name}>{user.firstName} {user.lastName}</h3>
                    <p>Age: {user.age}</p>
                    <p>{user.email}</p>
                    </div>
                    ) )}
            </div>
        </div>
    )


}

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    
  
    return {
      props: {
        users: data.users,
      },
    }
}