import React from 'react'
import LinkCard from './LinkCard'



function LinkList(props:any) {
  return (
    <div className="link-list">
      <LinkCard link={props.links[0]} onDeleteLink={props.onDeleteLink} />
      <LinkCard link={props.links[1]} onDeleteLink={props.onDeleteLink} />
      <LinkCard link={props.links[2]} onDeleteLink={props.onDeleteLink} />
    </div>
  );
}

export default LinkList
