import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";

const UsersContext = React.createContext({
    todos: [], fetchUsers: () => {}
})

export default function Users() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        //const response = await fetch("http://localhost:8000/users")
        //const users = await response.json()
        setUsers(JSON.parse('[{"FullName": "Nicolás Bacquet", "Email": "nibata@gmail.com"}]'))
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <UsersContext.Provider value={{users, fetchUsers}}>
            <Stack spacing={5}>
                {users.map((user) => (
                    <b>{user.FullName} {user.Email}</b>
                ))}
            </Stack>
        </UsersContext.Provider>
    )
}