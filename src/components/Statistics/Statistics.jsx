import { Section } from 'components';
//import Styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Section title="Good">{good}</Section>
      <Section title="Neutral">{neutral}</Section>
      <Section title="Bad">{bad}</Section>
      <Section title="Total">{total}</Section>
      <Section title="Positive feedback">{positivePercentage}</Section>
    </>
  );
};
