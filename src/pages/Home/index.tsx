import Container from "../../components/Container/Container";
import usePageTitle from "../../hooks/usePageTitle";

const HomePage = (): React.ReactNode => {
  usePageTitle("Home");

  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Home</h1>
      </Container>
    </main>
  );
};

export default HomePage;
