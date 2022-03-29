export type DescriptionProps = {
  text: string;
};

export function Description({ text }: DescriptionProps) {
  return (
    <section className='description-section'>
      <span className='description-text' key={text[1]}>
        {text}
      </span>
    </section>
  );
}
