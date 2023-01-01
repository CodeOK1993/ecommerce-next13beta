import BackButton from "../../components/buttons/BackButton";
import CategorySection from "../../components/sections/CategorySection";

const CategoriesPage = () => {
  return (
    <div>
      <BackButton />
      {/* @ts-expect-error Server Component */}
      <CategorySection displaySeeAllButton={false} />
    </div>
  );
};

export default CategoriesPage;
