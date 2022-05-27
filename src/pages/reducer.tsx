import { useReducer } from "react";
import styled from "styled-components";
type Reducer<S, A> = (prevState: S, action: A) => S;
type State = {
  count: number;
  color: boolean;
  input?: string;
};
type Action = {
  type: string;
  payload?: string;
};
enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  INPUT = "input",
  COLOR = "color",
  SUM = "sum",
  RESET = "reset",
}
const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionType.INPUT:
      return { ...state, input: action.payload };
    case ActionType.COLOR:
      return { ...state, color: !state.color };
    case ActionType.SUM:
      return { ...state, count: state.count + Number(state.input) };
    case ActionType.RESET:
      return { ...state, count: 0, input: "" };

    default:
      throw new Error();
  }
};

const states = {
  count: 0,
  input: "",
  color: false,
};
const Input = styled.input``;
const Container = styled.div``;
const Button = styled.button``;
const ReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, states);

  return (
    <Container>
      <h1>Reducer {`${state.count} ${state.input} ${state.color}`} </h1>
      <Input
        type="text"
        placeholder="Enter your 321312me"
        onChange={(e) =>
          dispatch({ type: ActionType.INPUT, payload: e.target.value })
        }
      />
      <Button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
        +
      </Button>
      <Button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
        -
      </Button>
      <Button onClick={() => dispatch({ type: ActionType.COLOR })}>
        Toggle
      </Button>
      <Button onClick={() => dispatch({ type: ActionType.SUM })}>Sum</Button>
      <Button onClick={() => dispatch({ type: ActionType.RESET })}>
        Reset
      </Button>
    </Container>
  );
};

export default ReducerScreen;
