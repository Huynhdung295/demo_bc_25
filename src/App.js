import { ThemeProvider } from "styled-components";
import { ButtonDemo, ButtonFake } from "./components/Button";
import { Title } from "./components/Button/styled";
import { WrapperFormLayout } from "./components/WrapperForm";
import { useChangeColor } from "./hooks/useChangeColor";
import { MainRouter } from "./routers";
import { GlobalStyle, theme } from "./styled";
function App() {
  const [color1] = useChangeColor("#000");
  const [color2] = useChangeColor("#000");
  const [color3] = useChangeColor("#000");

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Chỗ viết các UI khác được ảnh hưởng ké theme */}
        <ButtonDemo
          title="Test"
          sizeButton="200"
          color={color1}
          // typeBtn="dark"
        />
        <MainRouter />
        {/* <WrapperFormLayout>

          <ButtonFake sizeButton="200">
            <Title>Test 2</Title>
          </ButtonFake>
        </WrapperFormLayout> */}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
