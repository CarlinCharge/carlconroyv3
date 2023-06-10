import NextLink from "next/link";
import { Link, Flex } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";

export default function Nav() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Link as={NextLink} href="/">
        Carl Conroy
      </Link>
      <Flex>
        {MenuItems.map((item) => {
          return (
            <Link
              as={NextLink}
              href={item.href}
              key={item.text}
              mr="10px"
              p="4"
              _hover={{
                color: "#A970FF",
                textDecoration: "underline",
              }}
            >
              {item.text}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
