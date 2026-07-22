"use client";

import { ActionIcon, Affix, Group, Menu, Stack, Text } from "@mantine/core";
import { MdPerson } from "react-icons/md";

import type { IdentityWidgetInput } from "./types";

import { useIdentity } from "../../hooks/use-identity";

export function IdentityWidget({}: IdentityWidgetInput) {
  const { identity } = useIdentity();

  if (identity.user === null) return null;

  return (
    <Affix position={{ right: "xl", top: "xl" }}>
      <Menu position="bottom-end">
        <Menu.Target>
          <ActionIcon>
            <MdPerson size="75%" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Stack>
            <Group p="0.5rem">
              <Text fw="bold" size="sm">
                {identity.user.id}
              </Text>
            </Group>
          </Stack>
        </Menu.Dropdown>
      </Menu>
    </Affix>
  );
}
