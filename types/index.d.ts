import { Table, TableColumn } from "element-ui";
import { VNode } from "vue";
export interface column extends TableColumn {
  render: () => VNode;
}

export declare class ElTableRender extends Table {
  columns: column[];
}
