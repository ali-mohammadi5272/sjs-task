import Container from "../../components/Container/Container";
import Products from "../../components/Products/Products";
import usePageTitle from "../../hooks/usePageTitle";

const DashboardPage = (): React.ReactNode => {
  usePageTitle("Dashboard");

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
