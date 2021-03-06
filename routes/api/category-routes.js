const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
  const categories = await Category.findAll(
    {
      include:
      [
        {
          model: Product,
        },
      ],
    },
  );
  res.json(categories);
});

// get one category
router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id,
    {
      include:
      [
        {
          model: Product,
        },
      ],
    },
  );
  res.json(category);
});

// create new category
router.post('/', async (req, res) => {
  const newCategory = await Category.create(
    {
      category_name: req.body.categoryName,
    }
  )
  res.json(newCategory);
});

// update category
router.put('/:id', async (req, res) => {
  let updatedCategory = await Category.update(
    {
      category_name: req.body.categoryName
    },
    {
      where:
      {
        id: req.params.id
      },
      plain: true,
    }
  );
  if(updatedCategory[0] === 0)
  {
    return res.json({}); // No update, bail and return empty object
  }
  updatedCategory = await Category.findByPk(req.params.id, {
    plain: true
  });
  res.json(updatedCategory);
});

// delete category
router.delete('/:id', async (req, res) => {
  const deletedCategory = await Category.destroy(
    {
      where:
      {
        id: req.params.id
      }
    }
  );
  res.json(deletedCategory);
});

module.exports = router;
