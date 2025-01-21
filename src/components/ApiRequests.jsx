import styles from "./ApiRequests.module.css";

export default function ApiRequests({ requestsLeft }) {
  return (
    <div className={styles.apiRequestDiv}>
      {requestsLeft !== null ? (
        <p>Requests Left Today: {requestsLeft}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
