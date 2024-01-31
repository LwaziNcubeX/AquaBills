import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../assets";
import { FaChevronDown } from "react-icons/fa6";
import { FaBell, FaSearch } from "react-icons/fa";
import { NavTabs } from ".";

const Navbar = () => {
  return (
    <Box p={2}>
      <Flex>
        <Image src={Logo} alt="AquaBills Logo" width="150px" height="auto" />
        <Spacer />
        <NavTabs />
        <Spacer />
        <Box>
          <MenuItems />
        </Box>
      </Flex>
    </Box>
  );
};

const MenuItems = () => {
  return (
    <Box>
      <HStack spacing={{ base: "0", md: "6" }}>
        <HStack spacing={0}>
          <IconButton
            size="lg"
            variant="outline"
            aria-label="search icon"
            icon={<FaSearch />}
            rounded={"full"}
            bg={"gray.300"}
          />
          <IconButton
            size="lg"
            variant="outline"
            aria-label="Notifications"
            icon={<FaBell />}
            rounded={"full"}
            bg={"gray.300"}
          />
        </HStack>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton py={2}>
              <Stack direction={"row"} alignItems={"center"}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Lwazi Ncube</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FaChevronDown />
                </Box>
              </Stack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
