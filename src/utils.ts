export type State<E> = { val: E, set: ( React.Dispatch<React.SetStateAction<E>> ) | ( (input: E) => null ) }