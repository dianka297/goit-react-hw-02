import css from './Description.module.css';

export default function Description() {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.desc}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}