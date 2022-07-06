import { Button, CloneButton } from "./styled";

const ButtonDemo = ({ title, ...props }) => (
  <Button {...props}>{title}</Button>
);

const ButtonFake = ({...props}) => <CloneButton children {...props} />

export {
    ButtonDemo,
    ButtonFake
}
