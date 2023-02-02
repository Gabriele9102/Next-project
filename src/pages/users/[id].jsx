import { useRouter} from "next/router";
import {Link} from "next/link";
import styles from "../../styles/users.module.scss"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/users");
    const users = await res.json();

    const paths = users.map(user =>{
      return{
        params: {userId: user.id.toString()}
      }})

            return {paths, 
              fallback: false}
}


export async function getStaticProps(context) {
  const id = context.params.userId
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await res.json();
    
    
    return {
      props: {
        users: user.users,
      },
    }
  }
  
  const DinamicUser = ({users}) => {
  // const router = useRouter();
  // const id = router.query.id;  
  
    return (
    <div>
  
  
     {/* <h1>Pagina dinamica Pages: {id}</h1>; */}
          <div className={styles.card} key={users.id}>
          <h3 className={styles.full__name}>{`${users.firstName} ${users.lastName}`}</h3>
          <p>Age: {users.age}</p>
          <p>{users.email}</p>
          <Link href="/users" className={styles.link}> Go forward </Link>
          </div>
           
  </div>)
  };
  
  export default DinamicUser;
