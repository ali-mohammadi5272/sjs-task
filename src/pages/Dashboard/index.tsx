import Container from "../../components/Container/Container";
import Products from "../../components/Products/Products";

const DashboardPage = (): React.ReactNode => {
  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Dashboard</h1>
        <Products />
      </Container>
    </main>
  );
};

export default DashboardPage;
