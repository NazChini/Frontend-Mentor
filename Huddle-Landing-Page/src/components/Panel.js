import { StyledPanel } from "./styles/Panel.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";

export default function Panel() {
  return (
    <StyledPanel>
      <Container>
        <h2>Ready To Build Your Community?</h2>
        <Button bg="#ff0099" color="#fff">
          Get Started For Free
        </Button>
      </Container>
    </StyledPanel>
  );
}
