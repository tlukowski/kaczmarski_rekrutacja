import "./skeleton.less";

interface SkeletonProps {
  rowNumber: number;
}

const Skeleton = ({ rowNumber }: SkeletonProps) => (
  <div className="skeleton__table-container">
    <table className="skeleton__table">
      <thead>
        <tr className="skeleton__row">
          <th className="skeleton__cell">
            <div className="skeleton__line"></div>
          </th>
          <th className="skeleton__cell">
            <div className="skeleton__line"></div>
          </th>
          <th className="skeleton__cell">
            <div className="skeleton__line"></div>
          </th>
          <th className="skeleton__cell">
            <div className="skeleton__line"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rowNumber }, (_, index) => (
          <tr key={index}>
            <td className="skeleton__cell">
              <div className="skeleton__line"></div>
            </td>
            <td className="skeleton__cell">
              <div className="skeleton__line"></div>
            </td>
            <td className="skeleton__cell">
              <div className="skeleton__line"></div>
            </td>
            <td className="skeleton__cell">
              <div className="skeleton__line"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default Skeleton;
