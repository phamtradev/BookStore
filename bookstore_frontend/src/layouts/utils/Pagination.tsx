import React from 'react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: any;
}

export const Pagination: React.FC<PaginationProps> = (props) => {

  const listPages = [];
  if (props.currentPage === 1) {
    listPages.push(props.currentPage);
    if (props.totalPages >= props.currentPage + 1) {
      listPages.push(props.currentPage + 1);
    }
    if (props.totalPages >= props.currentPage + 2) {
      listPages.push(props.currentPage + 2);
    }
  } else if (props.currentPage > 1) {
    if (props.currentPage >= 3) {
      listPages.push(props.currentPage - 2);
    }
    if (props.currentPage >= 2) {
      listPages.push(props.currentPage - 1);
    }
    listPages.push(props.currentPage);
    if (props.totalPages > props.currentPage + 1) {
      listPages.push(props.currentPage + 1);
    }
    if (props.totalPages > props.currentPage + 2) {
      listPages.push(props.currentPage + 2);
    }
  }

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item" onClick={() => props.paginate(1)}>
            <button className="page-link">Trang đầu</button>
          </li>
          {
            listPages.map(page => (
              <li className="page-item" key={page} onClick={() => props.paginate(page)}>
                <button className={"page-link" + (props.currentPage === page ? " active" : "")} >
                  {page}
                </button>
              </li>
            ))
          }
          <li className="page-item" onClick={() => props.paginate(props.totalPages)}>
            <button className="page-link">Trang cuối</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
