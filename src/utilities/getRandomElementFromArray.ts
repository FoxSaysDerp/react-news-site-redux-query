interface Props {
   type: any;
   array: Array<Props['type']>
}

export const getRandomElementFromArray = (props: Props) : Props['type'] => {
   const {array} = props;
   return array[Math.floor(Math.random() * array.length)];
}