import firebaseApp from './fb-config';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export default db;