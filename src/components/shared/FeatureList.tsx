import { headphonesFeatures } from '../../constants';

interface FeatureListProps {
  features: { name: React.ReactNode; icon: React.ReactNode }[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-2 gap-1 sm:gap-2 p-4">
      {features.map(({ name, icon }, index) => (
        <li key={index} className={`flex items-center py-4 gap-4 ${index % 2 !== 0 ? 'pl-2 sm:pl-0' : ''}`}>
          <span style={{ width: '1.5rem', height: '1.5rem' }}>{icon}</span>
          {name}
        </li>
      ))}
    </div>
  );
};

const HeadphonesFeatures = () => {
  return <FeatureList features={headphonesFeatures} />;
};

export default HeadphonesFeatures;
