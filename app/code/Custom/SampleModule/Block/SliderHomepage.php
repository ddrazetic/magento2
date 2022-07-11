<?php
namespace Custom\SampleModule\Block;

use Magento\Framework\View\Element\Template;

class SliderHomepage extends \Magento\Framework\View\Element\Template
{
    protected $_productCollectionFactory;

    public function __construct(

        \Magento\Framework\App\Config\ScopeConfigInterface             $scopeConfig,
//        array                                                          $data1 = [],

        \Magento\Backend\Block\Template\Context                        $context,
        \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory $productCollectionFactory,
        array                                                          $data = []
    )
    {
        $this->scopeConfig = $scopeConfig;
//        parent::__construct($context, $data1);
        $this->_productCollectionFactory = $productCollectionFactory;
        parent::__construct($context, $data);
    }

    public function getConfigValue($value = '')
    {
        return $this->scopeConfig->getValue($value, \Magento\Store\Model\ScopeInterface::SCOPE_STORE);
    }

    public function getProductCollection()
    {
        $collection = $this->_productCollectionFactory->create();
        $collection->addAttributeToSelect('*');
        $collection->addAttributeToFilter('is_featured', ['eq' => 1]);
        $collection->addAttributeToFilter('visibility', ['neq' => 1]);
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

    public function getProductCollectio()
    {

        return 'ffgvgvfdvfddfv';
    }
}

?>
