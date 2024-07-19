'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useFormContext } from "react-hook-form"
import {useEffect} from "react";
import { Bold, Italic, List, ListOrdered, Strikethrough, ImageIcon} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import Image from '@tiptap/extension-image';


const Tiptap = ({ val }: {val: string}) => {
    const { setValue } = useFormContext()
    const editor = useEditor({
        extensions: [
            Image,
            StarterKit.configure({
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal pl-4",
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc pl-4",
                    },
                },
            }),
        ],
        onUpdate: ({ editor }) => {
            const content = editor.getHTML()
            setValue("content", content, {
                shouldValidate: true,
                shouldDirty: true,
            })
        },
        editorProps: {
            attributes: {
                class:
                    "min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            },
        },
        content: val,
    })

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    useEffect(() => {
        if (editor?.isEmpty) editor.commands.setContent(val)
    }, [val])


return (
    <div className="flex flex-col gap-2">
        {editor && (
            <div className="border-input border rounded-md">
                <Toggle
                    pressed={editor.isActive("bold")}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                    size={"sm"}
                >
                    <Bold className="w-4 h-4" />
                </Toggle>
                <Toggle
                    pressed={editor.isActive("italic")}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                    size={"sm"}
                >
                    <Italic className="w-4 h-4" />
                </Toggle>
                <Toggle
                    pressed={editor.isActive("strike")}
                    onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                    size={"sm"}
                >
                    <Strikethrough className="w-4 h-4" />
                </Toggle>
                <Toggle
                    pressed={editor.isActive("orderedList")}
                    onPressedChange={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    size={"sm"}
                >
                    <ListOrdered className="w-4 h-4" />
                </Toggle>
                <Toggle
                    onPressedChange={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    size={"sm"}
                >
                    <List className="w-4 h-4" />
                </Toggle>
                <Toggle
                    onPressedChange={addImage}
                    size={"sm"}
                >
                    <ImageIcon className="w-4 h-4" />
                </Toggle>
            </div>
        )}
        <EditorContent placeholder="heyy" editor={editor} />
    </div>
)}

export default Tiptap
