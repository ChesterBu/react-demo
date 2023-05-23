export const Segment: React.FC<{ id: string, title: string}> = ({ id, title })=>{
    return (
      <div className="list_content" key={id}>
        <div className="list_content_source">{title}</div>
        <div className="list_content_key">{id}</div>
      </div>
    )
  }
export const VirtualList: React.FC<{ data: { title: string; id: string; }[] | undefined, total: number }> = ({ data }) =>{
    return (
      <div className="virtual_scroll_area">
        <div className="virtual_scroll_stub"></div>
        <div className="virtual_scroll_content">
          {data?.map((i) => (
            <Segment key={i.id} id={i.id} title={i.title} />
          ))}
        </div>
      </div>
    )
  }