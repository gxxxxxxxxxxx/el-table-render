# el-table-render

- 帮助你在el-table里面以配置化的写法，并支持render函数，你可以写jsx或render function
- 后续功能优化中

- 食用方法
```html
   <ElTableRender :columns="tableColumns" :data="tableData" height="300" />
```
```js
const tableColumns = [
  {
              prop: 'name',
              label: 名称,
              width: '200px',
              render:(h,{row})=>(
               <div>{row.name}</div>
              ),
              headerRender: (h,props) => (
              <div>customTitle</div>
            )
            }
]
```