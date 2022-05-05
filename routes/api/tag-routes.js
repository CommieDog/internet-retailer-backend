const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data
  const tags = await Tag.findAll(
    {
      include:
      [
        {
          model: Product,
        },
      ],
    },
  );
  res.json(tags);
});

  // find a single tag by its `id`
router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id,
  {
    include:
    [
      {
        model: Product,
      },
    ],
  },
);
res.json(tag);
});

  // create a new tag
router.post('/', async (req, res) => {
  const newTag = await Tag.create(
  {
    tag_name: req.body.tagName,
  });
res.json(newTag);
});

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  let updatedTag = await Tag.update(
    {
      tag_name: req.body.tagName
    },
    {
      where:
      {
        id: req.params.id
      },
      plain: true,
    }
  );
  if(updatedTag[0] === 0)
  {
    return res.json({}); // No update, bail and return empty object
  }
  updatedTag = await Tag.findByPk(req.params.id, {
    plain: true
  });
  res.json(updatedTag);
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  await ProductTag.destroy(
    {
      where:
      {
        tag_id: req.params.id
      }
    }
  );
  const deletedTag = await Tag.destroy(
    {
      where:
      {
        id: req.params.id
      }
    }
  );
  res.json(deletedTag);
});

module.exports = router;
