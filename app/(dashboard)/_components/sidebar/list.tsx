"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((memb) => (
        <Item
          key={memb.organization.id}
          id={memb.organization.id}
          name={memb.organization.name}
          imageUrl={memb.organization.imageUrl}
        />
      ))}
    </ul>
  )
};

export default List;
