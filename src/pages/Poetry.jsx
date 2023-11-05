import React, { Fragment, useState } from 'react'
import Markdown from 'react-markdown'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import Text from "../components/atoms/Text"
import poetry from "../data/poetry"

const Poetry = () => {
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState(poetry[0])
  const [open, setOpen] = useState(false)

  const openModal = async (item) => {
    const response = await fetch(item.url)
    const text = await response.text()
    setSelected(item)
    setContent(text)
    setOpen(true)
  }

  const closeModal = () => setOpen(false)

  return (
    <Fragment>
      <div className="bg-gray-100 min-h-screen">
        <div className="container py-5">
          <Text headline3 className="text-center mb-2">
            Poetry
          </Text>
          <Text
            headline6
            className="text-center mb-10 text-gray-600 max-w-3xl mx-auto"
          >
            noun. /ˈpəʊətri/
            <br />literary work in which special intensity is given to the expression of feelings and ideas by the use of distinctive style and rhythm
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {poetry.map((item) => (
              <div className="bg-white shadow-lg rounded-lg p-3 hover:bg-blue-50 cursor-pointer" onClick={() => openModal(item)}>
                <Text subtitle2 className="mb-2">{item.title}</Text>
                <Text className="line-clamp-2">{item.content}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomSheet open={open} onDismiss={closeModal}>
        <div className="px-5 py-2">
          <Text subtitle2 className="mb-4">{selected.title}</Text>
          <Markdown className="[&>p]:mb-2">{content}</Markdown>
        </div>
      </BottomSheet>
    </Fragment>
  )
}

export default Poetry