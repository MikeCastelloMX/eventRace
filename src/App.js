import React from 'react';
import Subheader from './components/Subheader';
import Table from './components/Table';

function App() {
  return (
    <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
      <Subheader />
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div className="alert alert-light alert-elevate" role="alert">
      <div className="alert-icon"><i className="flaticon-warning kt-font-brand"></i></div>
      <div className="alert-text">
        Each column has an optional rendering control called columns.render which can be used to process the content of each cell before the data is used.
        See official documentation <a className="kt-link kt-font-bold" href="https://datatables.net/examples/advanced_init/column_render.html" target="_blank" rel="noopener noreferrer">here</a>.
      </div>
    </div>

    <div className="kt-portlet kt-portlet--mobile">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">
            Column Rendering
          </h3>
        </div>
      </div>

      <div className="kt-portlet__body">
        <Table />
      </div>
    </div>	</div>
    </div>
  );
}

export default App;
