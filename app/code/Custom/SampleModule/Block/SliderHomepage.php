<?php
namespace Custom\SampleModule\Block;

use Magento\Framework\View\Element\Template;
use Magento\Framework\Registry;

use Magento\Catalog\Model\ProductCategoryList;

class SliderHomepage extends \Magento\Framework\View\Element\Template
{

    /**
     * @var ProductCategoryList
     */
    public $productCategory;
    protected $_productCollectionFactory;

    public function __construct(
        ProductCategoryList                                            $productCategory,

        Registry                                                       $registry,
        \Magento\Framework\App\Config\ScopeConfigInterface             $scopeConfig,
//        array                                                          $data1 = [],

        \Magento\Backend\Block\Template\Context                        $context,
        \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory $productCollectionFactory,
        array                                                          $data = []
    )
    {
        $this->productCategory = $productCategory;

        $this->registry = $registry;
        $this->scopeConfig = $scopeConfig;
//        parent::__construct($context, $data1);
        $this->_productCollectionFactory = $productCollectionFactory;
        parent::__construct($context, $data);
    }

    public function getConfigValue($value = '')
    {
        return $this->scopeConfig->getValue($value, \Magento\Store\Model\ScopeInterface::SCOPE_STORE);
    }

    public function getCategoryIds(int $productId)
    {
        $categoryIds = $this->productCategory->getCategoryIds($productId);
        $category = [];
        if ($categoryIds) {
            $category = array_unique($categoryIds);
        }
        return $category;
    }

    public function getProductCollection()
    {
        $collection = $this->_productCollectionFactory->create();
        $collection->addAttributeToSelect('*');
        $collection->addAttributeToFilter('is_featured', ['eq' => 1]);
        $collection->addAttributeToFilter('visibility', ['neq' => 1]);
        if ($currentCategory = $this->getCurrentCategory()) {
            $collection->addCategoriesFilter(['eq' => $currentCategory->getId()]);
        }
//        $collection->addAttributeToFilter('type_id', ['eq' => 'simple']);
        $collection->setPageSize(15);

        return $collection;

    }

    public function getProductConfigurable()
    {
        $collection = $this->_productCollectionFactory->create();
        $collection->addAttributeToSelect('*');
        $collection->addAttributeToFilter('is_featured', ['eq' => 1]);
        $collection->addAttributeToFilter('type_id', ['eq' => 'configurable']);
        $collection->setPageSize(15);

        return $collection;

    }

    public function getCurrentCategory()
    {
        return $this->registry->registry('current_category');
    }

    public function getProductCollectio()
    {

        return 'ffgvgvfdvfddfv';
    }
}

?>
