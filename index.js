export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  render(h, ctx) {
    const listRender = arr => {
      return arr
        .filter(item => !item.hide)
        .map(column =>
          h(
            'el-table-column',
            {
              props: {
                ...column
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
            },
            Array.isArray(column.children) ? listRender(column.children) : []
          )
        )
    }

    return h(
      'el-table',
      {
        props: {
          ...ctx.data.attrs
        },
        on: ctx.data.on,
        ref: ctx.data.ref,
        directives: ctx.data.directives || []
      },
      listRender(ctx.props.columns)
    )
  }
}
