import React, { useContext } from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableContainer = React.forwardRef<HTMLDivElement, Props>(
  function TableContainer(props, ref) {
    const { className, children, ...other } = props;

    return (
      <div
        className={clsx(
          "w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5",
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </div>
    );
  }
);

export default TableContainer;
