import { Table, TableColumn } from "element-ui";
import { VNode } from "vue";

type dictObj = {
  key: string | number;
  value: string;
};
export interface column extends TableColumn {
  render?: () => VNode;
  headerRender?: () => VNode;
  children?: column[];
  dict?: dictObj[];
}

export default class ElTableRender extends Table {
  columns: column[];
}
