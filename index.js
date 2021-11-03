export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  render(h, ctx) {
    return h(
      'el-table',
      {
        props: {
          ...ctx.data.attrs
        }
      },
      ctx.props.columns.map(column =>
        h('el-table-column', {
          props: {
            ...column
          },
          on: {
            ...ctx.data.on
          },
          scopedSlots: column.type
            ? {}
            : {
              default: props => {
                return column.render ? column.render(h, props) : props.row[column.prop]
              },
              header: props => {
                return column.headerRender ? column.headerRender(h, props) : props.column.label
              }
            }
        })
      )
    )
  }
}
